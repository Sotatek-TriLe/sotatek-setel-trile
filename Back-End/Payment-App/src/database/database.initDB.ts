export type OrderFruits={
    name: string,
    price: number,
    image: string,
    description: string,
    status:Status
}
export let initOrder: OrderFruits[]=[
    {
        "name": "Berries",
        "price": 23.54,
        "image": "/assets/images/berries.jpeg",
        "description": "The bestest fruit known to man. Sweet yet sour but beautiful",
        "status":1
    },
    {
        "name": "Orange",
        "price": 10.33,
        "image": "/assets/images/oranges.jpeg",
        "description": "Succulent and watery, you'll never run out of water",
        "status":1
    },
    {
        "name": "Lemons",
        "price": 12.13,
        "image": "/assets/images/lemons.jpeg",
        "description": "Sour but important for revitalization",
        "status":1
    },
    {
        "name": "Bananas",
        "price": 10.33,
        "image": "/assets/images/banana.jpeg",
        "description": "An every day fruit, can be served with every dish",
        "status":1
    },
    {
        "name": "Apples",
        "price": 10.33,
        "image": "/assets/images/apple-item.png",
        "description": "Sliced and served with your salad.","status":1
    },
    {
        "name": "Sharifa",
        "price": 10.33,
        "image": "/assets/images/unknown.jpeg",
        "description": "A great fruit, also known as custard apple",
        "status":1
    }
]
enum Status {
    Created=1,
    Confirmed=2,
    Cancelled=3,
    Delivered=4
}
