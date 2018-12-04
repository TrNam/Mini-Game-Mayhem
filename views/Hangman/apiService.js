class ApiService {
    constructor() {
        this.hangman = null;
        this.token = null;
    }

    newGame() {
        return new Promise((resolve, reject) => {
            fetch('http://hangman-api.herokuapp.com/hangman', {
                method: "POST",
            })
                .then((res) => res.json())
                .then((json) => {
                    this.hangman = json.hangman;
                    this.token = json.token;
                    resolve(true);
                })
                .catch((e) => {
                    reject(e);
                })
        });

    }

    getToken() {
        return this.token;
    }

    getSolution(){
        if (this.getToken() != null) {
            return new Promise((resolve, reject) => {
                fetch(`http://hangman-api.herokuapp.com/hangman?token=${encodeURIComponent(this.getToken())}`, {
                    method: "GET",
                })
                    .then((res) => res.json())
                    .then((json) => {
                        resolve(json);
                    })
                    .catch((e) => {
                        reject(e);
                    })
            });
        } else {
            console.log('Error');
        }
    }

    getHint(){
        if (this.getToken() != null) {
            return new Promise((resolve, reject) => {
                fetch(`http://hangman-api.herokuapp.com/hangman/hint?token=${encodeURIComponent(this.getToken())}`, {
                    method: "GET",
                })
                    .then((res) => res.json())
                    .then((json) => {
                        resolve(json);
                    })
                    .catch((e) => {
                        reject(e);
                    })
            });
        } else {
            console.log('Error');
        }
    }

    guessLetter(letter) {
        if (this.getToken() != null) {
            return new Promise((resolve, reject) => {
                let guessedLetter = new FormData();
                guessedLetter.append('token', this.getToken());
                guessedLetter.append('letter', letter);
                fetch('http://hangman-api.herokuapp.com/hangman', {
                    method: "PUT",
                    body: guessedLetter
                })
                    .then((res) => res.json())
                    .then((json) => {
                        resolve(json);
                    })
                    .catch((e) => {
                        reject(e);
                    })
            });
        } else {
            console.log('Error');
        }
    }




}

module.exports = {
    ApiService,
}

// export const client = {
//   rendevous: {
//     client: axios.create({
//       baseURL: 'http://ec2-34-221-16-108.us-west-2.compute.amazonaws.com',
//       responseType: 'json'
//     })
//   },
//   songkick: {
//     client: axios.create({
//       baseURL: 'http://api.songkick.com/api/3.0',
//       responseType: 'json'
//     })
//   },
//   googleMaps: {
//     client: axios.create({
//       baseURL: 'https://maps.googleapis.com/maps/api/geocode',
//       responseType: 'json'
//     })

//   }
// }

