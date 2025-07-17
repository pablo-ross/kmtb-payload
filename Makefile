.PHONY: help dev build prod stop clean logs

# Default target
help:
	@echo "Available commands:"
	@echo "  dev     - Start development environment"
	@echo "  build   - Build production Docker image"
	@echo "  prod    - Start production environment"
	@echo "  stop    - Stop all containers"
	@echo "  clean   - Remove containers and images"
	@echo "  logs    - Show logs for all services"

# Development environment
dev:
	docker compose --profile dev up -d payload-dev mongo

# Build production image
build:
	docker compose build payload

# Production environment
prod:
	docker compose up -d payload mongo

# Stop all containers
stop:
	docker compose down

# Clean up containers and images
clean:
	docker compose down -v --rmi all

# Show logs
logs:
	docker compose logs -f