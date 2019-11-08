const { fileForEach, readFile, writeFile } = require('@jiaminghi/fs')
const Client = require('ftp')
const print = require('./plugin/print')
const { emptyDir, put, mkDir } = require('./plugin/ftp')
const getNodeParams = require('./plugin/nodeParams')

let config = null

try {
  config = require('./config')
} catch (err) {
  void 0
}

const DIST_PATH = './docs/.vuepress/dist'

const ftp = new Client()

ftp.on('ready', async foo => {
  print.tip('FTP connected!')

  const isEmpty = await emptyDir(ftp, '/', ['demo'])

  if (!isEmpty) {
    print.error('Exception in emptyDir!')

    return false
  }

  let status = true

  await fileForEach(DIST_PATH, async src => {
    const destPath = '/' + src.split('dist/')[1]
    const destDir = destPath.split('/').slice(0, -1).join('/')

    await mkDir(ftp, destDir, true)

    print.tip('Upload: ' + destPath)

    if (!await put(ftp, src, destPath)) {
      status = false
      
      print.error('Exception in upload ' + destPath)
    }
  })

  if (status) {
    print.yellow('-------------------------------------')
    print.success('    Automatic Deployment Success!    ')
    print.yellow('-------------------------------------')  
  }

  ftp.destroy()
})

ftp.on('greeting', foo => {
  print.tip('FTP greeting')
})
ftp.on('close', foo => {
  print.tip('FTP close')
})
ftp.on('end', foo => {
  print.tip('FTP end')
})
ftp.on('error', foo => {
  print.tip('FTP error')
})

const GrowingIO_SDK = `
    <!-- GrowingIO Analytics code version 2.1 -->
    <!-- Copyright 2015-2018 GrowingIO, Inc. More info available at http://www.growingio.com -->
    <script type='text/javascript'>
      !function(e,t,n,g,i){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},n=t.createElement("script"),tag=t.getElementsByTagName("script")[0],n.async=1,n.src=('https:'==document.location.protocol?'https://':'http://')+g,tag.parentNode.insertBefore(n,tag)}(window,document,"script","assets.giocdn.com/2.1/gio.js","gio");
        gio('init','8c2b1ac53bbd18d5', {});
      gio('send');
    </script>
    <!-- End GrowingIO Analytics code version: 2.1 -->
`

async function addGrowingIOSDK () {
  const indexPagePath = DIST_PATH + '/index.html'

  let indexPage = await readFile(indexPagePath)

  if (!indexPage) return false

  if (indexPage.indexOf(GrowingIO_SDK) !== -1) return true

  const addedSDKHead = indexPage.match(/<head>(\s|\S)*<\/head>/)[0]
    .replace('</head>', `${GrowingIO_SDK}\n   </head>`)

  indexPage = indexPage.replace(/<head>(\s|\S)*<\/head>/, addedSDKHead)

  return writeFile(indexPagePath, indexPage)
}

const { host, user, pass } = config || getNodeParams()

if (!host || !user || !pass) {
  print.error('Upload Dist to FTP Missing Parameters!')

  return false
}

try {
  (async function () {
    print.tip('Start add Growing IO SDK!')

    const addGIOSDK = await addGrowingIOSDK()

    if (!addGIOSDK) return print.error('Add Growing IO SDK fail!')

    print.tip('Add Growing IO SDK success!')

    print.tip('Start Upload!')

    ftp.connect({
      host,
      user,
      password: pass
    })
  })()
} catch {
  print.error('Deploy Fail!')
}
