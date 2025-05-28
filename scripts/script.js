const summary = document.querySelector('#summary')

const folders = document.querySelectorAll('.folder')
for (const folder of folders) {
    const folder_id = folder.getAttribute('id')

    const h1_title = document.querySelector(`#${folder_id} .folder-title`)
    const title = h1_title.innerText

    const ul_summary_folder = document.createElement('ul')
    summary.appendChild(ul_summary_folder)

    const a_folder = document.createElement('a')
    a_folder.innerText = title
    a_folder.setAttribute('href', `#${folder_id}`)
    ul_summary_folder.appendChild(a_folder)

    const papers = document.querySelectorAll(`#${folder_id} .paper`)
    for (const paper of papers) {
        const paper_id = paper.getAttribute('id')

        const h1_paper_title = document.querySelector(`#${paper_id} .title`)
        const paper_title = h1_paper_title.innerText

        const a_paper = document.createElement('a')
        a_paper.innerText = paper_title
        a_paper.setAttribute('href', `#${paper_id}`)
        ul_summary_folder.appendChild(a_paper)

        const li_paper = document.createElement('li')
        li_paper.appendChild(a_paper)
        ul_summary_folder.appendChild(li_paper)
    }
}