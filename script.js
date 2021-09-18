const jsonString = `[
    {
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
]`;

function renderCard(item, time) {
    let tmp = "";
    switch (time) {
        case "daily": 
            tmp = "Yesterday";
            break;
        case "weekly":
            tmp = "Last week";
            break;
        case "monthly":
            tmp = "Last month";
            break;
    }
    return `
    <div class="card card--${ item.title.toLowerCase().replace(" ", "-") }">
        <div class="card__header">
            <h2 class="card__title">${ item.title }</h2>
            <button class="card__options-btn"><img src="images/icon-ellipsis.svg" alt=""></button>
        </div>
        <div class="card__body">
            <div class="card__value">${ item.timeframes[time].current }hrs</div>
            <div class="card__last-value">
            ${tmp} - ${ item.timeframes[time].previous }hrs</div>
        </div>
    </div>
    `;
}

const data = JSON.parse(jsonString);


const dashboard = document.querySelector(".dashboard");
const btnDaily = document.querySelector(".dashboard__btn--daily");
const btnWeekly = document.querySelector(".dashboard__btn--weekly");
const btnMonthly = document.querySelector(".dashboard__btn--monthly");

let time = "weekly";

if (dashboard != null) {
    for (const item of data) {
        dashboard.insertAdjacentHTML("beforeend", renderCard(item, time));
    }
}
