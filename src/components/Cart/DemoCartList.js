function convertBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        }
        fileReader.onerror = (error) => {
            reject(error);
        }
    })
}

async function fetchImageFile(imagePath) {
    try {
        const response = await fetch(imagePath);
        return await response.blob();
    } catch (error) {
        console.error('Error fetching image:', error);
        throw error;
    }
}

let imgstring;
let imgstring2;
// Fetch the image file and convert it to base64
fetchImageFile('../../../public/images/nikecap1.jpg')
    .then(blob => {
        return convertBase64(blob);
    })
    .then(base64String => {
        imgstring = base64String;
        console.log('Base64 String:', imgstring);
    }).catch(error => {
        console.error('Error:', error);
    });

    console.log("from demo file "+imgstring);

fetchImageFile('../../../public/images/nikecap2.jpg')
    .then(blob => {
        return convertBase64(blob);
    })
    .then(base64String => {
        imgstring2 = base64String;
        console.log('Base64 String:', imgstring);
    }).catch(error => {
        console.error('Error:', error);
    });

const DemoCart = [
    {
        name: "Sports Cap",
        brand: "Nike",
        images: [imgstring, imgstring2],
        description: "Sports cap for professional use.",
        category: ["Caps", "Wearables", "Sports"],
        price: 319,
        averageStar: 4.5,
        remarks: {
            colors: ["Blue", "Black", "White"]
        }
    },
    {
        name: "Summer Cap",
        brand: "Nike India",
        images: [imgstring, imgstring2],
        description: "Summer cap for Personal use.",
        category: ["Caps", "Wearables", "Sports"],
        price: 289,
        averageStar: 5.0,
        remarks: {
            colors: ["Blue", "Black", "White","Yellow"]
        }
    }
]

export default DemoCart;