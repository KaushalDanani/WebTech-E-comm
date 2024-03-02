const pdata = [
  {
      "name": "Smartphone X",
      "brand": "TechMaven",
      "images": [
          {
              "img": "https://res.cloudinary.com/dbompzfbm/image/upload/v1709324337/refurb-iphone-13-pro-max-graphite-2023_vy5z9n.jpg",
              "contentType": "image/jpeg"
          }
      ],
      "description": "The latest flagship smartphone packed with advanced features and cutting-edge technology.",
      "category": ["Electronics", "Smartphones"],
      "price": 899.99,
      "averageStar": 4.9,
      "remarks": {
          "colors": [
              {"color": "Black"},
              {"color": "Silver"},
              {"color": "Gold"}
          ],
          "sizes": [
              {"size": "One Size"}
          ]
      },
      "discount": 50,
      "noOfOrder": 100
  },
  {
      "name": "Men's Leather Jacket",
      "brand": "UrbanStyle",
      "images": [
          {
              "img": "https://res.cloudinary.com/dbompzfbm/image/upload/v1709324282/mens-black-leather-biker-jacket-classic-quilt-detail_q9cirp.jpg",
              "contentType": "image/jpeg"
          }
      ],
      "description": "Premium quality leather jacket designed for style and durability.",
      "category": ["Fashion", "Clothing"],
      "price": 199.99,
      "averageStar": 4.7,
      "remarks": {
          "colors": [
              {"color": "Black"},
              {"color": "Brown"}
          ],
          "sizes": [
              {"size": "Small"},
              {"size": "Medium"},
              {"size": "Large"}
          ]
      },
      "discount": 20,
      "noOfOrder": 50
  },
  {
      "name": "Wireless Bluetooth Speaker",
      "brand": "SoundWave",
      "images": [
          {
              "img": "https://res.cloudinary.com/dbompzfbm/image/upload/v1709324242/5520801_sd_ufd64s.jpg",
              "contentType": "image/jpeg"
          }
      ],
      "description": "Portable Bluetooth speaker delivering crisp and clear sound for your music and podcasts.",
      "category": ["Electronics", "Speakers"],
      "price": 79.99,
      "averageStar": 4.5,
      "remarks": {
          "colors": [
              {"color": "Black"},
              {"color": "Red"},
              {"color": "Blue"}
          ],
          "sizes": [
              {"size": "One Size"}
          ]
      },
      "discount": 10,
      "noOfOrder": 80
  },
  {
      "name": "Women's Running Shoes",
      "brand": "ActiveWear",
      "images": [
          {
              "img": "https://res.cloudinary.com/dbompzfbm/image/upload/v1709324198/free-rn-2018-womens-running-shoes-zE8Je3_uvttva.jpg",
              "contentType": "image/jpeg"
          }
      ],
      "description": "Lightweight and breathable running shoes designed for optimal performance and comfort.",
      "category": ["Fashion", "Shoes"],
      "price": 129.99,
      "averageStar": 4.6,
      "remarks": {
          "colors": [
              {"color": "Black"},
              {"color": "White"},
              {"color": "Pink"}
          ],
          "sizes": [
              {"size": "US 6"},
              {"size": "US 7"},
              {"size": "US 8"},
              {"size": "US 9"}
          ]
      },
      "discount": 30,
      "noOfOrder": 120
  },
  {
      "name": "Stainless Steel Water Bottle",
      "brand": "EcoTrend",
      "images": [
          {
              "img": "https://res.cloudinary.com/dbompzfbm/image/upload/v1709324154/32ozHydroBottleStainlessSteel_tfycha.jpg",
              "contentType": "image/jpeg"
          }
      ],
      "description": "Reusable water bottle made from high-quality stainless steel, perfect for everyday use and outdoor activities.",
      "category": ["Home & Kitchen", "Drinkware"],
      "price": 19.99,
      "averageStar": 4.3,
      "remarks": {
          "colors": [
              {"color": "Silver"},
              {"color": "Black"},
              {"color": "Blue"}
          ],
          "sizes": [
              {"size": "500ml"},
              {"size": "750ml"}
          ]
      },
      "discount": 5,
      "noOfOrder": 200
  },
  {
      "name": "Wireless Gaming Mouse",
      "brand": "GamerGear",
      "images": [
          {
              "img": "https://res.cloudinary.com/dbompzfbm/image/upload/v1709324081/61qN9d08hgL_jj6p4r.jpg",
              "contentType": "image/jpeg"
          }
      ],
      "description": "Ergonomic wireless gaming mouse with adjustable DPI and customizable RGB lighting.",
      "category": ["Electronics", "Gaming Accessories"],
      "price": 49.99,
      "averageStar": 4.8,
      "remarks": {
          "colors": [
              {"color": "Black"},
              {"color": "White"}
          ],
          "sizes": [
              {"size": "One Size"}
          ]
      },
      "discount": 15,
      "noOfOrder": 150
  },
  {
      "name": "Organic Cotton T-Shirt",
      "brand": "GreenLife",
      "images": [
          {
              "img": "https://res.cloudinary.com/dbompzfbm/image/upload/v1709324021/122003601_g1_youorz.jpg",
              "contentType": "image/jpeg"
          }
      ],
      "description": "Soft and comfortable organic cotton t-shirt made with eco-friendly materials.",
      "category": ["Fashion", "Clothing"],
      "price": 29.99,
      "averageStar": 4.6,
      "remarks": {
          "colors": [
              {"color": "White"},
              {"color": "Black"},
              {"color": "Gray"}
          ],
          "sizes": [
              {"size": "Small"},
              {"size": "Medium"},
              {"size": "Large"}
          ]
      },
      "discount": 8,
      "noOfOrder": 80
  },
  {
      "name": "Professional Chef's Knife",
      "brand": "CulinaryCraft",
      "images": [
          {
              "img": "https://res.cloudinary.com/dbompzfbm/image/upload/v1709323928/216gWgwdxDL._SX300_SY300_QL70_FMwebp__srtnic.webp",
              "contentType": "image/jpeg"
          }
      ],
      "description": "High-quality chef's knife designed for precision cutting and chopping in the kitchen.",
      "category": ["Home & Kitchen", "Cookware"],
      "price": 69.99,
      "averageStar": 4.9,
      "remarks": {
          "colors": [
              {"color": "Silver"},
              {"color": "Black"}
          ],
          "sizes": [
              {"size": "One Size"}
          ]
      },
      "discount": 25,
      "noOfOrder": 120
  },
  {
      "name": "Women's Yoga Mat",
      "brand": "ZenFlow",
      "images": [
          {
              "img": "https://res.cloudinary.com/dbompzfbm/image/upload/v1709323847/6mm-eva-anti-slip-home-gym-exercise-workout-fitness-for-men-original-imagwbcggvp7mhw3_s21yeb.jpg",
              "contentType": "image/jpeg"
          }
      ],
      "description": "Premium quality yoga mat made from eco-friendly materials, ideal for yoga and meditation practices.",
      "category": ["Fitness", "Yoga"],
      "price": 49.99,
      "averageStar": 4.7,
      "remarks": {
          "colors": [
              {"color": "Blue"},
              {"color": "Purple"}
          ],
          "sizes": [
              {"size": "Standard"}
          ]
      },
      "discount": 12,
      "noOfOrder": 90
  },
  {
      "name": "Classic Wooden Chess Set",
      "brand": "GrandMaster",
      "images": [
          {
              "img": "https://res.cloudinary.com/dbompzfbm/image/upload/v1709322327/519k3bRnnFL._SL1080__bsejeh.jpg",
              "contentType": "image/jpeg"
          }
      ],
      "description": "Handcrafted wooden chess set with beautifully carved pieces, perfect for players of all skill levels.",
      "category": ["Toys & Games", "Board Games"],
      "price": 39.99,
      "averageStar": 4.4,
      "remarks": {
          "colors": [
              {"color": "Natural Wood"}
          ],
          "sizes": [
              {"size": "Standard"}
          ]
      },
      "discount": 6,
      "noOfOrder": 70
  }
]

  

  export default pdata;