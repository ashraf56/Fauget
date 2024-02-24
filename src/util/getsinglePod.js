

const getsinglePod =async (id) => {
    try {
        let res = await fetch('https://api.lyrics.ovh/suggest/e')
        if(!res.ok){
            throw  new Error("data load failed")
        }
        
        return res.json()
      } catch (error) {
        console.log(error);
      }
};

export default getsinglePod;