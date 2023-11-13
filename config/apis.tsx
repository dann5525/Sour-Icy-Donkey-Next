
export const getChallenge = async (address: string): Promise<{ result: any }> => {
    try {
        const response = await fetch(`http://localhost:3001/request_challenge?address=${address}`);
        const data = await response.json();
        return { result: data };
    } catch (error) {
        console.error(error);
        // return a default value that matches the Promise type
        return { result: null };
    }
}

export const userAuthenticate = async (address: string, signature: string) => {
    try {
        const response = await fetch(`http://localhost:3001/authenticate?address=${address}&&signature=${signature}`);
        const data = await response.json();
        return { result: data };
    } catch (error) {
        console.error(error);
        // return a default value that matches the Promise type
        return { result: null };
    }
}

export const getProfile = async (address: string, signature: string): Promise<{ result: any }> => {
    try {
        const response = await fetch(`http://localhost:3001/get_profile?address=${address}&&signature=${signature}`);
        const data = await response.json();
        return { result: data };
    } catch (error) {
        console.log(error);
        return { result: null };
    }
}

export const createProfile = async (address: string, name: string, email: string, telegram: string): Promise<{ result: any }> => {
    try {
        const expire_time = localStorage.getItem('expire_time');
        if (expire_time) {
            const current_timestamp = new Date();
            if (Number(expire_time) * 1000 > current_timestamp.getTime()) {
                const signature = localStorage.getItem('signature');
                const response = await fetch(`http://localhost:3001/create_profile?address=${address}&&signature=${signature}&&name=${name}&&email=${email}&&telegram=${telegram}`);
                const data = await response.json();
                return { result: data };
            } else {
                return { result: null };
            }
        } else {
            return { result: null };
        }

    } catch (error) {
        return { result: null };
    }
}

export const createInstance = async (address: string, signature: string, pair: string, dex: string,
    safe_address: string, trade_module: string, chain: string,
    strategy: string, setting1: string, setting2: string,
    setting3: string, setting4: string, setting5: string): Promise<{ result: any }> => {
    try {
        const expire_time = localStorage.getItem('expire_time');
        if (expire_time) {
            const current_timestamp = new Date();
            if (Number(expire_time) * 1000 > current_timestamp.getTime()) {
                const response = await fetch(`http://localhost:3001/create_instance?address=${address}&&signature=${signature}&&owner=${address}&&pair=${pair}&&dex=${dex}&&safe_address=${safe_address}&&trade_module=${trade_module}&&chain=${chain}&&strategy=${strategy}&&setting1=${setting1}&&setting2=${setting2}&&setting3=${setting3}&&setting4=${setting4}&&setting5=${setting5}`);
                const data = await response.json();
                return { result: data };
            } else {
                return { result: null };
            }
        } else {
            return { result: null };
        }

    } catch (error) {
        return { result: null };
    }
}

export const getInstanceId = async (address: string): Promise<string> => {
    const response = await fetch(`http://localhost:3001/instances?account=${address}`);
    const data = await response.json();
    return data.ids?data.ids[data.ids.length-1]:"";
}

export const getInstance = async (address: string, id: string, signature: string): Promise<{ result: any }> => {
    try {
        const response = await fetch(`http://localhost:3001/instance?account=${address}&&instance_id=${id}&&signature=${signature}`);
        const data = await response.json();
        return { result: data };
    } catch (error) {
        return { result: null }
    }
}

export const editInstance = async (address: string, id: string, signature: string, trade_module: string, strategy: string, setting1: string, setting2: string, setting3: string, setting4: string, setting5: string): Promise<{result: string}> => {
    try {
        const response = await fetch(`http://localhost:3001/edit_instance?account=${address}&&instance_id=${id}&&signature=${signature}&&trade_module=${trade_module}&&strategy=${strategy}&&setting1=${setting1}&&setting2=${setting2}&&setting3=${setting3}&&setting4=${setting4}&&setting5=${setting5}`);
        const data = await response.json();
        return {result: data.message};
    } catch (error) {
        return {result: ''};
    }
}