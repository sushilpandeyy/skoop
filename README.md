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

### Accessing the Platform 🚀

- Once the contracts are deployed and the frontend server is running, open your browser and navigate to the URL where the frontend is hosted (usually `http://localhost:3000`).
- Connect your Metamask wallet to the Sepolia testnet.
- Use the platform to access news articles. Note that adding as a user might require spending some test Ether.

## Contribution 🤝

Feel free to contribute to the Skoop project by creating issues or submitting pull requests.

## License 📝

This project is unlicensed. Feel free to use it as you please!
