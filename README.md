# Express App with Core Node.js Modules

This project demonstrates how to build a simple **Express.js application** and integrate it with **Node.js core modules** such as `fs`, `os`, and `dns`.

The application exposes multiple routes to:
- Test the server
- Read data from a file
- Fetch system details
- Resolve an IP address using DNS

---

## 📁 Project Structure

express-modules-app/

├── index.js

├── read.js

├── Data.txt

├── package.json

├── package-lock.json

└── node_modules/ (not pushed to GitHub)


---

## 🚀 Getting Started

### 1️⃣ Initialize the Project
```bash
npm init -y
```

### 2️⃣ Install Dependencies
```bash
npm install express
```

### 3️⃣ Run the Server
```bash
node index.js
```


## 📌 Available Routes
### 🔹 Test Route

GET /test
Response:
```
Test route is working!
```

### 🔹 Read File Route

GET /readfile

Reads data from Data.txt using the fs module and returns its content.

Example Response:
```
This is some sample data inside Data.txt.
```

### 🔹 System Details Route

GET /systemdetails

Uses the os module to fetch system information.

Example Response:
```
{
  "platform": "win32",
  "totalMemory": "16 GB",
  "freeMemory": "8 GB",
  "cpuModel": "Intel(R) Core(TM) i7 CPU",
  "cpuCores": 8
}
```

### 🔹 Get IP Address Route

GET /getip

Uses the dns module to resolve the IP address of masaischool.com.

Example Response:
```
{
  "hostname": "masaischool.com",
  "addresses": [
    {
      "address": "3.7.30.29",
      "family": 4
    }
  ]
}
```

 📌 Note: IP address may vary due to DNS resolution.
 

## 🧩 Technologies Used

Node.js

Express.js

fs (File System)

os (Operating System)

dns (Domain Name System)


## ❌ Files Not Pushed to GitHub

### node_modules

Reason: Large size and can be regenerated using npm install


## ✅ Files Pushed to GitHub

index.js

read.js

Data.txt

package.json

package-lock.json


## ✨ Conclusion

This project helps in understanding how Express.js can be combined with Node.js core modules to build modular and functional backend applications.
