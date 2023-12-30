let arr=[
    "Initialising Hacking program....",
    "Fetching Admin Username...",
    "Username is Found...",
    "Hacking instagram account..",
    "Account is being hacked....",
    "Account is hacked successfully"
]
const sleep=async(sec)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(true)
        }, sec*1500);
    })
}

const show=async(msg)=>{
    await sleep(1)
    console.log(msg)
    fi.innerHTML=fi.innerHTML+msg+"<br>"

}
(async()=>{
    for(let i=0;i<arr.length;i++){
        await show(arr[i])
    }
})()