import getApiUrl from "./SetApi";


const apiUrl = getApiUrl();


export default class Data {
    api(path, method = "GET", body = null, token) {

        const url = apiUrl + path;


        const options = {
            method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest',
            }
        }

        if (token) {

            options.headers.Authorization = `Bearer ${token}`
        }
        if (body != null) {
            options.body = JSON.stringify(body);
        }
        return fetch(url, options)

    }


    async getAllPosts(page) {


        try {

            let data = await this.api(`/posts?page=${page}`, "GET")

            if (data.status === 200) {
                let resp = await data.json();

                return resp
            } else {
                return "Something went wrong"
            }

        } catch (error) {
            // console.log(error);
        }


    }


    async getCount() {


        try {

            let data = await this.api(`/posts/count`, "GET")

            if (data.status === 200) {
                let resp = await data.json();
                return resp
            } else {
                return "Something went wrong"
            }

        } catch (error) {
            // console.log(error);
        }


    }


    async filterCategories(categories, page) {
        try {
            let data = await this.api(`/posts/filter/categories?page=${page}`, "POST", categories)

            if (data.status === 201) {

                let resp = await data.json();

                return resp
            } else {
                return "Something went wrong"
            }
        } catch (error) {
            console.log(error);
        }
    }



    async search(string, page) {
        try {
            let data = await this.api(`/posts/search?searchFor=${string}&page=${page}`, "GET")
            let resp = await data.json();

            return resp
        } catch (error) {

        }
    }


}