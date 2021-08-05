// Put your application javascript here
const isSortBy = document.querySelector('#sort_by')

if (isSortBy) {
  document.querySelector('#sort_by').addEventListener('change', e => {
    var url = new URL(window.location.href)
    url.searchParams.set('sort_by', e.currentTarget.value)
    window.location = url.href
  })
}

