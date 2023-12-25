class ApiSportEnergy {
    static BASE_URL = 'https://your-energy.b.goit.study/api';

    static handleErrors(method) {
        return async () => {
            try {
                return await method();
            } catch (error) {
                console.error('Помилка при запиті: ', error.message);
            }
        };
    }

    static async fetchJson(url, options) {
        const response = await fetch(url, options);
        return response.json();
    }

    async getQuotes() {
        const wrappedMethod = ApiSportEnergy.handleErrors(async () => {
            return await ApiSportEnergy.fetchJson(`${ApiSportEnergy.BASE_URL}/quote`);
        });
        return await wrappedMethod();
    }

    async getByFilterName(data) {
    
        const wrappedMethod = ApiSportEnergy.handleErrors(async () => {
            const params = new URLSearchParams({ ...data });
            return await ApiSportEnergy.fetchJson(`${ApiSportEnergy.BASE_URL}/filters?${params}`);
        });
        return await wrappedMethod();
    }

    async getByFilterCategory(data) {
        const wrappedMethod = ApiSportEnergy.handleErrors(async () => {
            const params = new URLSearchParams({ ...data });
            return await ApiSportEnergy.fetchJson(`${ApiSportEnergy.BASE_URL}/exercises?${params}`);
        });
        return await wrappedMethod();
    }

    async getOneExercises(id) {
        const wrappedMethod = ApiSportEnergy.handleErrors(async () => {
            return await ApiSportEnergy.fetchJson(`${ApiSportEnergy.BASE_URL}/exercises/${id}`);
        });
        return await wrappedMethod();
    }

    async addExercisesRate(id, body) {
        const wrappedMethod = ApiSportEnergy.handleErrors(async () => {
            const requestOptions = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            };
            return await ApiSportEnergy.fetchJson(
                `${ApiSportEnergy.BASE_URL}/exercises/${id}/rating`,
                requestOptions
            );
        });
        return await wrappedMethod();
    }

    async addSubscription(email) {
        const wrappedMethod = ApiSportEnergy.handleErrors(async () => {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(email),
            };
            return await ApiSportEnergy.fetchJson(
                `${ApiSportEnergy.BASE_URL}/subscription`,
                requestOptions
            );
        });
        return await wrappedMethod();
    }
}

const fetchSportEnergy = new ApiSportEnergy();

export default fetchSportEnergy;
