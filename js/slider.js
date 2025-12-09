


function slideVendorContent() {

    document.getElementById('vendor-slide-button').classList.add('selected')
    document.getElementById('vendor-slide-content').classList.add('slided')

    document.getElementById('job-slide-button').classList.remove('selected')
    document.getElementById('job-slide-content').classList.remove('slided')
    document.getElementById('labo-slide-button').classList.remove('selected')
    document.getElementById('labo-slide-content').classList.remove('slided')
    document.getElementById('deal-slide-button').classList.remove('selected')
    document.getElementById('deal-slide-content').classList.remove('slided')

}

function slideJobContent() {

    document.getElementById('job-slide-button').classList.add('selected')
    document.getElementById('job-slide-content').classList.add('slided')

    document.getElementById('vendor-slide-button').classList.remove('selected')
    document.getElementById('vendor-slide-content').classList.remove('slided')
    document.getElementById('labo-slide-button').classList.remove('selected')
    document.getElementById('labo-slide-content').classList.remove('slided')
    document.getElementById('deal-slide-button').classList.remove('selected')
    document.getElementById('deal-slide-content').classList.remove('slided')


}

function slideLaboContent() {
    document.getElementById('labo-slide-button').classList.add('selected')
    document.getElementById('labo-slide-content').classList.add('slided')

    document.getElementById('vendor-slide-button').classList.remove('selected')
    document.getElementById('vendor-slide-content').classList.remove('slided')
    document.getElementById('job-slide-button').classList.remove('selected')
    document.getElementById('job-slide-content').classList.remove('slided')
    document.getElementById('deal-slide-button').classList.remove('selected')
    document.getElementById('deal-slide-content').classList.remove('slided')
}

function slideDealContent() {
    document.getElementById('deal-slide-button').classList.add('selected')
    document.getElementById('deal-slide-content').classList.add('slided')

    document.getElementById('vendor-slide-button').classList.remove('selected')
    document.getElementById('vendor-slide-content').classList.remove('slided')
    document.getElementById('job-slide-button').classList.remove('selected')
    document.getElementById('job-slide-content').classList.remove('slided')
    document.getElementById('labo-slide-button').classList.remove('selected')
    document.getElementById('labo-slide-content').classList.remove('slided')
}