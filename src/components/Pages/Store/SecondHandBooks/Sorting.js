export default function Sorting(Props) {

    const sortButtonHandler = (e) => {
        document.querySelector('.sort-btn--active').classList.remove('sort-btn--active')
        e.target.classList.add('sort-btn--active')
    }

  return (
      Props.items.map((item)=>(
            <a key={item.id} onClick={sortButtonHandler} href={item.href} data-id={item.dataId} className={`sort-btn ${item.active ? 'sort-btn--active' : ''}`} role="button"> {item.title} </a>
      ))
  )
}
