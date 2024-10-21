const flatArr = [{
        id: 0,
        house: "Незалежності 15",
        floor: '1',
        flatNumber: '1',
        rooms: '3',
        square: '82.3 м²',
        price: '720$',
        priceTotal: '59256$',
        status: 'action',
    },
    {
        id: 1,
        house: "Незалежності 15",
        floor: "1",
        flatNumber: "2",
        rooms: "2",
        square: "60,7м²",
        price: "700$",
        priceTotal: "43704$",
        status: "sold",
    },
    {
        id: 2,
        house: "Незалежності 15",
        floor: "1",
        flatNumber: "3",
        rooms: "3",
        square: "60,7м²",
        price: "700$",
        priceTotal: "42490$",
        status: "free",
    },
    {
        id: 3,
        house: "Незалежності 15",
        floor: "1",
        flatNumber: "4",
        rooms: "3",
        square: "82м²",
        price: "700$",
        priceTotal: "57400$",
        status: "booking",
    },
    {
        id: 4,
        house: "Незалежності 15",
        floor: "1",
        flatNumber: "5",
        rooms: "3",
        square: "79.7м²",
        price: "700$",
        priceTotal: "55790$",
        status: "booking",
    },
    {
        id: 5,
        house: "Незалежності 15",
        floor: "1",
        flatNumber: "6",
        rooms: "1",
        square: "39.2м²",
        price: "700$",
        priceTotal: "27440$",
        status: "free",
    },
    {
        id: 6,
        house: "Незалежності 15",
        floor: "1",
        flatNumber: "7",
        rooms: "1",
        square: "40.0м²",
        price: "700$",
        priceTotal: "29400$",
        status: "booking",
    },
    {
        id: 7,
        house: "Незалежності 15",
        floor: "1",
        flatNumber: "8",
        rooms: "1",
        square: "39.2м²",
        price: "700$",
        priceTotal: "27440$",
        status: "sold",
    },
    {
        id: 8,
        house: "Незалежності 15",
        floor: "1",
        flatNumber: "9",
        rooms: "3",
        square: "79.3м²",
        price: "700$",
        priceTotal: "55510$",
        status: "action",
    },
]

const Alisa = {
    old: 7,
    bgColor: "red",
}

console.log(Alisa.bgColor);


const catsArr = [{
        id: 0,
        name: "Arsen",
        old: 7,
        bgColor: "red",
        status: "new",
    },
    {
        id: 1,
        name: "Murka",
        old: 2,
        bgColor: "white",
        status: "boss",
    },
    {
        id: 2,
        name: "Alisa",
        old: 4,
        bgColor: "black",
    },
]


const floorPlan = () => {
    const flats = document.querySelectorAll('.flat')
    const flatInfo = document.querySelector('.information-list')
    const firstFlat = [flatArr[0]]

    console.log(firstFlat);
    

    const removeActiveClass = () => flats.forEach(item => item.classList.remove('active'))

    const setInitialActiveClass = () => {
        const flat = document.querySelector('.flat')
        flat.classList.add('active');
    }





    const renderInformation = (array) => {
        const flatInformation = array.map(item => {
            return (`
                    <li class="information-item">
                        <h6>Статус квартири:</h6>
                        <div>${item.house}</div>
                    </li>
                    <li class="information-item">
                        <h6>Статус квартири:</h6>
                        <div>${item.floor}</div>
                    </li>
                    <li class="information-item">
                        <h6>Статус квартири:</h6>
                        <div>${item.flatNumber}</div>
                    </li>
                    <li class="information-item">
                        <h6>Статус квартири:</h6>
                        <div>${item.rooms}</div>
                    </li>
                    <li class="information-item">
                        <h6>Статус квартири:</h6>
                        <div>${item.square}</div>
                    </li>
                    <li class="information-item">
                        <h6>Статус квартири:</h6>
                        <div>${item.price}</div>
                    </li>
                    <li class="information-item">
                        <h6>Статус квартири:</h6>
                        <div>${item.priceTotal}</div>
                    </li>
                    <li class="information-item">
                        <h6>Статус квартири:</h6>
                        <div>${item.status}</div>
                    </li>
                    `)
        })

        flatInfo.innerHTML = flatInformation
    }

 
    renderInformation(firstFlat)


















 

    flats.forEach(flat => {
        flat.addEventListener('click', function() {
            removeActiveClass()
            flat.classList.add('active')

            const thisFlatNumber = flat.getAttribute('data-number')
            const flatNumber = flatArr.filter(item => item.flatNumber === thisFlatNumber)
            renderInformation(flatNumber)
        })

        const setFlatStatus =()=> flatArr.find(item => {
            const thisFlatNumber = flat.getAttribute('data-number')
         
            
            if (item.flatNumber === thisFlatNumber) {
                flat.classList.add(item.status)
            }
        })

        setFlatStatus()

        if (flat.classList.contains('action')) {
            flat.querySelector('.flat-stutus-text').innerHTML = 'Акция'
        } else if(flat.classList.contains('booking')) {
            flat.querySelector('.flat-stutus-text').innerHTML = 'Бронь'
        } else if(flat.classList.contains('sold')) {
            flat.querySelector('.flat-stutus-text').innerHTML = 'Зайнята'
        } else {
            flat.querySelector('.flat-stutus-text').innerHTML = 'Вілна'
        }
    })

    setInitialActiveClass()
}

document.querySelector('.floor-plan') ? floorPlan() : null;




// <ul class="information-list">
// <li class="information-item">
//     <h6>Номер дому:</h6>
//     <div>2</div>
// </li>
// <li class="information-item">
//     <h6>Поверх:</h6>
//     <div>1</div>
// </li>
// <li class="information-item">
//     <h6>Номер квартири:</h6>
//     <div>1</div>
// </li>
// <li class="information-item">
//     <h6>Кількість кімнат:</h6>
//     <div>2</div>
// </li>
// <li class="information-item">
//     <h6>Площа квартири:</h6>
//     <div>72м²</div>
// </li>
// <li class="information-item">
//     <h6>Ціна за м²:</h6>
//     <div>3000</div>
// </li>
// <li class="information-item">
//     <h6>Ціна за квартиру:</h6>
//     <div>700000</div>
// </li>
// <li class="information-item">
//     <h6>Статус квартири:</h6>
//     <div>Акція</div>
// </li>
// </ul>