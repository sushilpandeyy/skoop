# Skoop: Decentralized News Platform 📰

Skoop is a decentralized news platform built on the Ethereum blockchain. It allows users to access news articles securely and transparently without relying on a centralized authority. This README provides instructions on setting up the Skoop project locally.

## Setup Locally 🛠️

### Prerequisites
- Node.js installed on your machine
- Metamask extension installed in your browser
- Solidity development environment (e.g., Hardhat)
- Truffle for deploying contracts (optional)

### Clone the Repository
```bash
git clone https://github.com/sushilpandeyy/skoop.git
cd skoop
```

### Install Dependencies

#### Client (Frontend) 💻
```bash
cd client
npm install
```

#### Smart Contract (Blockchain) ⛓️
```bash
cd ../SmartContract
npm install
```

### Connect to Sepolia Testnet 🌐

To interact with the Sepolia testnet, you will need some test Ether in your wallet. You can obtain test Ether from a Sepolia faucet or any other Ethereum testnet faucet.

### Run the Application

#### Client (Frontend) 💼
```bash
cd client
npm run dev
```

#### Smart Contract (Blockchain) ⚙️
No need to redeploy as the contracts are already deployed on the Sepolia testnet.

# Fake News Detector Model

This repository contains a machine learning model for detecting fake news. The model is designed to assess the quality of news articles before they are deployed on a blockchain platform.

## Model Files

Due to the large size of the model file, it's hosted on OneDrive. You can download the model from the following link:

[Click here to access the Fake News Detector model](https://drive.google.com/drive/folders/1OAJMFrJ2_JXa96CB7ZfWDOHpzdHq867C?usp=sharing)

## Dependencies

To use the model, you'll need to install the following dependencies:

- PyTorch
- TensorFlow
- NumPy
- Pandas
- Transformers

You can install them using pip:

```bash
pip install torch tensorflow numpy pandas transformers
```

## Usage

After installing the dependencies, you can use the provided sample code to load and utilize the model for fake news detection.



### Accessing the Platform 🚀

- Once the contracts are deployed and the frontend server is running, open your browser and navigate to the URL where the frontend is hosted (usually `http://localhost:5173`).
- Connect your Metamask wallet to the Sepolia testnet.
- Use the platform to access news articles. Note that adding as a user might require spending some test Ether.

## Contribution 🤝

Feel free to contribute to the Skoop project by creating issues or submitting pull requests.

## License 📝

This project is unlicensed. Feel free to use it as you please!
