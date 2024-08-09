const socket = io(window.location.href);

const toast = (message) => {
	Toastify({
		text: message,
		duration: 3000,
		newWindow: true,
		close: true,
		gravity: "top",
		position: "right",
		stopOnFocus: true,
		onClick: function () {},
	}).showToast();
};

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("sendMessage").addEventListener("click", () => {
		socket.emit("testEvent", "Hello from client");
	});

	socket.on("testEvent", (data) => {
		toast(data);
	});

	socket.on("connect", () => {
		toast("Connected to the server");
	});

	socket.on("disconnect", () => {
		toast("Disconnected from the server");
	});
});
