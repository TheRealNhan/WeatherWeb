const share = document.getElementById('start-share')
const video = document.getElementById('share-screen-video')

share.disabled = false;

share.addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = stream;
    } catch (err) {
        //throw new Error(err);
        //console.log(err.code)
        switch (err.code) {
            case 0:
                var x = document.getElementById("snackbar");
                x.textContent = `Bạn đã từ chối quyền truy cập chia sẻ màn hình.`;
                        // Add the "show" class to DIV
                x.className = "show";
                document.getElementById('share-screen').style.animation = 'shake 0.5s';
                setTimeout(() => {
                    document.getElementById('share-screen').style.animation = '';
                },1000)
                        // After 3 seconds, remove the show class from DIV
                setTimeout(() => { x.className = x.className.replace("show", ""); }, 3000);
            
        }
    }
});