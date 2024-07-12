const express = require ("express")
const app = express()
const port = 7000

app.get("/", (req, resp) => {
	// identitas
	resp.send("Nama saya trisna dari kelompok 1");
})

app.listen(port, ()=> console.log(`listening on port ${port}`))
