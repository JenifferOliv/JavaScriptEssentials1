fakeRequest("url1", (err, data) => {
    console.log("Resposta 1:", data);

    fakeRequest("url2", (err, data) => {
        console.log("Resposta 2:", data);

        fakeRequest("url3", (err, data) => {
            console.log("Resposta 3:", data);
        });
    });
});
