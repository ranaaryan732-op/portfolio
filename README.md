# 🚀 Portfolio Site — Dockerized

A personal portfolio website containerized with Docker and automatically deployed via **GitHub Actions CI/CD**.

---

## 📦 Tech Stack

| Layer      | Technology        |
|------------|-------------------|
| Web Server | Nginx (Alpine)    |
| Container  | Docker            |
| CI/CD      | GitHub Actions    |
| Registry   | Docker Hub        |

---

## 🔄 CI/CD Pipeline

Every push to the `main` branch automatically:
1. **Builds** the Docker image
2. **Pushes** it to Docker Hub as `ranaaryan732/portfolio-site`

![GitHub Actions](https://img.shields.io/github/actions/workflow/status/ranaaryan732-op/portfolio/docker-build-push.yml?label=Docker%20Build&logo=github-actions)
![Docker Pulls](https://img.shields.io/docker/pulls/ranaaryan732/portfolio-site?logo=docker)

---

## 🐳 Run Locally with Docker

```bash
docker pull ranaaryan732/portfolio-site
docker run -d -p 8080:80 ranaaryan732/portfolio-site
```

Then open → [http://localhost:8080](http://localhost:8080)

---

## 🛠️ Build from Source

```bash
git clone https://github.com/ranaaryan732-op/portfolio.git
cd portfolio
docker build -t portfolio-site .
docker run -d -p 8080:80 portfolio-site
```

---

## 🔑 Required GitHub Secrets

Go to **Settings → Secrets and variables → Actions** and add:

| Secret Name       | Value                        |
|-------------------|------------------------------|
| `DOCKER_USERNAME` | Your Docker Hub username     |
| `DOCKER_PASSWORD` | Your Docker Hub access token |

---

## 📄 License

MIT © Aryan Rana
