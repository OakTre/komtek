export default () => {
    const btn = document.querySelector(".project-info__table-btn");
    const container = document.querySelector(".project-info__table");

    btn.addEventListener("click", (e)=> {
        let self = e.target;

        container.classList.toggle("is-active");
        self.classList.toggle("is-active");
    });

};