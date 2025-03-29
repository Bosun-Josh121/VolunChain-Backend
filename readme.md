# VolunChain

**Innovating Volunteering with Blockchain 🚀**

VolunChain is a blockchain-powered platform that connects volunteers with organizations in a transparent, decentralized, and efficient way. Our mission is to make volunteering more accessible, secure, and rewarding for everyone .

---

## 🌟 Key Features

- **Opportunity Connection:** Match volunteers with organizations.
- **NFT Certifications:** Reward achievements with unique digital collectibles.
- **Tokenized Rewards:** Incentivize volunteers with blockchain tokens.
- **Community Governance:** A planned DAO model for user-driven decisions.
- **Transparency & Security:** All data and transactions are verifiable and secure.
- **Global Reach:** Designed to connect communities worldwide.

---

## 🌟 **Important!**

If you found this repository helpful or contributed to it, **please give it a ⭐ on GitHub!**  
Your support helps us grow and motivates us to continue improving VolunChain. 🙌

---

## 🛠️ Technologies Used

- **Frontend:** React, Next.js.
- **Backend:** Node.js, Express, Prisma.
- **Blockchain:** Stellar, Rust.
- **Database:** PostgreSQL, Prisma.
- **Containers:** Docker for consistent environments.
- **Architecture:** Domain-Driven Design (DDD)

---

## 🏗️ Project Structure

The project follows Domain-Driven Design principles with the following structure:

```
src/
├── modules/
│   └── project/
│       ├── domain/           # Domain entities and value objects
│       ├── repositories/     # Repository interfaces and implementations
│       ├── use-cases/        # Application business logic
│       └── dto/             # Data Transfer Objects
├── shared/                  # Shared kernel
└── infrastructure/          # External services and implementations
```

### Domain Layer
- Contains business entities and value objects
- Implements domain logic and business rules
- Independent of external concerns

### Repository Layer
- Defines interfaces for data access
- Implements data persistence logic
- Abstracts database operations

### Use Cases Layer
- Implements application business logic
- Orchestrates domain objects
- Handles transaction boundaries

### DTO Layer
- Defines data structures for API communication
- Handles data validation and transformation
- Separates domain models from API contracts

---

## 🚀 Installation

Follow these steps to set up the backend locally:

### Prerequisites:

- Node.js (v18 or higher)
- Docker & Docker Compose

### Steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-repo/volunchain-backend.git
   cd volunchain-backend
   ```

2. **Set Up Environment Variables**:
   Create a `.env` file:

   ```env
   DATABASE_URL=postgresql://volunchain:volunchain123@localhost:5432/volunchain
   PORT=3000
   JWT_SECRET=your-jwt-secret
   ```

3. **Start PostgreSQL with Docker**:

   ```bash
   docker-compose up -d
   ```

4. **Install Dependencies**:

   ```bash
   npm install
   ```

5. **Run the Development Server**:
   ```bash
   npm run dev
   ```

---

## 🤝 How to Contribute

1. Fork the repository.
2. Create a branch for your changes:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit your changes:
   i. The project uses pre-commit hooks to ensure code quality. They will automatically:

   - Run ESLint to check code style
   - Run Prettier to format code
   - Run tests to ensure everything works

   ii. For urgent commits that need to bypass checks:

   ```bash
   git commit -m "urgent fix" --no-verify
   ```

   ```bash
   git commit -m "Add new feature"
   ```

4. Push and create a Pull Request.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

## 🎉 Empowering Volunteerism, One Block at a Time.
