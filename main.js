let daily = document.querySelector(".daily");
let weekly = document.querySelector(".weekly");
let monthly = document.querySelector(".monthly");
daily.addEventListener("click", () => {
    daily.classList.add("pressed");
    monthly.classList.remove("pressed");
    weekly.classList.remove("pressed");
    fetch("data.json")
        .then(data => data.json())
        .then(res => {
            for (state of res) {
                let div = document.querySelector(`.${(state.title).split(" ").join("")}`);
                div.nextElementSibling.innerHTML = `${state.timeframes.daily.current}hrs`;
                div.nextElementSibling.nextElementSibling.innerHTML = `last day - ${state.timeframes.daily.previous}hrs `;

            }
        });
})
weekly.addEventListener("click", () => {
    weekly.classList.add("pressed");
    daily.classList.remove("pressed");
    monthly.classList.remove("pressed");
    fetch("data.json")
        .then(data => data.json())
        .then(res => {
            for (state of res) {
                let div = document.querySelector(`.${(state.title).split(" ").join("")}`);
                div.nextElementSibling.innerHTML = `${state.timeframes.weekly.current}hrs`;
                div.nextElementSibling.nextElementSibling.innerHTML = `last week - ${state.timeframes.weekly.previous}hrs `;

            }
        });
})
monthly.addEventListener("click", () => {
    monthly.classList.add("pressed");
    daily.classList.remove("pressed");
    weekly.classList.remove("pressed");
    fetch("data.json")
        .then(data => data.json())
        .then(res => {
            for (state of res) {
                let div = document.querySelector(`.${(state.title).split(" ").join("")}`);
                div.nextElementSibling.innerHTML = `${state.timeframes.monthly.current}hrs`;
                div.nextElementSibling.nextElementSibling.innerHTML = `last month - ${state.timeframes.monthly.previous}hrs`;

            }
        });
}) 