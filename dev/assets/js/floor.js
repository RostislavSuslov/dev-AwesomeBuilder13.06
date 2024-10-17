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

// const catsArr = [
//     {   
//         id: 0,
//         name: "Arsen",
//         old: 7,
//         bgColor: "red",
//         status: "new",
//     },
//     {   
//         id: 1,
//         name: "Murka",
//         old: 2,
//         bgColor: "white",
//         status: "boss",
//     },
//     {   
//         id: 2,
//         name: "Alisa",
//         old: 4,
//         bgColor: "black",
//     },
// ]


const floorPlan =()=> {
    const flats = document.querySelectorAll('.flat')
    const flatInfo = document.querySelector('.information-list')
    console.log(flats);
    
    const removeActiveClass =()=> flats.forEach(item => item.classList.remove('active'))


    flats.forEach(flat => {
        flat.addEventListener('click', function() {
            removeActiveClass()
            flat.classList.add('active')
        })
        
    })
}

document.querySelector('.floor-plan') ? floorPlan() : null;
