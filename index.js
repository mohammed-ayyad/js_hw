const x=[
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu": 0.78,
		"batters": {
			"batter": [
				{
					"id": "1001",
					"type": "Regular"
				},
				{
					"id": "1002",
					"type": "Chocolate"
				},
				{
					"id": "1003",
					"type": "Blueberry"
				},
				{
					"id": "1004",
					"type": "Devil's Food"
				}
			]
		},
		"topping": [
			{
				"id": "5001",
				"type": "None"
			},
			{
				"id": "5002",
				"type": "Glazed"
			},
			{
				"id": "5005",
				"type": "Sugar"
			},
			{
				"id": "5007",
				"type": "Powdered Sugar"
			},
			{
				"id": "5006",
				"type": "Chocolate with Sprinkles"
			},
			{
				"id": "5003",
				"type": "Chocolate"
			},
			{
				"id": "5004",
				"type": "Maple"
			}
		]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters": {
			"batter": [
				{
					"id": "1001",
					"type": "Regular"
				}
			]
		},
		"topping": [
			{
				"id": "5001",
				"type": "None"
			},
			{
				"id": "5002",
				"type": "Glazed"
			},
			{
				"id": "5005",
				"type": "Sugar"
			},
			{
				"id": "5003",
				"type": "Chocolate"
			},
			{
				"id": "5004",
				"type": "Maple"
			}
		]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu": 0.26,
		"batters": {
			"batter": [
				{
					"id": "1001",
					"type": "Regular"
				},
				{
					"id": "1002",
					"type": "Chocolate"
				}
			]
		},
		"topping": [
			{
				"id": "5001",
				"type": "None"
			},
			{
				"id": "5002",
				"type": "Glazed"
			},
			{
				"id": "5003",
				"type": "Chocolate"
			},
			{
				"id": "5004",
				"type": "Maple"
			}
		]
	}
]
//x.forEach(e=>console.log(e.topping.forEach(e2=>console.log(e))))
    let topping_types=new Set();
	x.forEach(e=>e.topping.forEach(e2=>topping_types.add(e2.type)));
	console.log('%cAll topping types',' color: red ;font-weight: bold');
	topping_types.forEach(e=>console.log(e));
	console.log('%c**************************************','color: blue');
    
    
    let batter_types=new Set();
	x.forEach(e=>e.batters.batter.forEach(e2=>batter_types.add(e2.type)));
	console.log('%cAll batter types',' color: red ;font-weight: bold');
    batter_types.forEach(e=>console.log(e));
	console.log('%c**************************************','color: blue');

    
    
    let count=0;
	let sum=0;
	x.forEach(e=>{sum+=e.ppu;count+=1});
	console.log('%cthe Ppu average',' color: red ;font-weight: bold');
    console.log(sum/count);
	console.log('%c**************************************','color: blue');

    console.log('%cthe Ppu sum',' color: red ;font-weight: bold');
    console.log(sum);
	console.log('%c**************************************','color: blue');

    
    let ids=new Set();
    x.forEach(e=>{
        ids.add(e.id);
        e.batters.batter.forEach(e2=>ids.add(e2.id));
        e.topping.forEach(e2=>ids.add(e2.id));
    
	});
	console.log('%call mentioned IDs regardless to the type',' color: red ;font-weight: bold')
    ids.forEach(e=>console.log(e));




