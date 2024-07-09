import "whatwg-fetch";

class httpService {
    getProducts = () => {
        return new Promise((resolve, reject) => {
            fetch("http://localhost:3000/products")
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }
}

export default httpService;
