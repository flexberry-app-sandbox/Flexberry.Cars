docker build --no-cache -f SQL\Dockerfile.PostgreSql -t cars-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t cars-java/app ../../..

