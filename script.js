document.getElementById("submit-btn").addEventListener("click", function () {
    const mood = document.getElementById("mood").value;
    const messageBox = document.getElementById("message");

    let message;

    switch (mood) {
        case "happy":
            message = "Savor every second of this happiness, allowing it to spread. You are on a path of positivity and growth, keep moving forward!";
            break;
        case "sad":
            message = "Even when times are tough, keep in mind that brighter days are ahead. Take it one day, minute, second at a time... each moment will bring you closer to healing!";
            break;
        case "anxious":
            message = "One step at a time. You do not have to have it all figured out right now. Remember to breathe... ground yourself in this moment and know that you will get through this too!";
            break;
        case "excited":
            message = "Embrace your enthusiasm and allow it to fuel your dreams. The universe is giving you a reason to smile! This energy will lead you far on your path!";
            break;
        default:
            message = "Please select a mood to receive a motivational message.";
    }

    messageBox.textContent = message;
});
