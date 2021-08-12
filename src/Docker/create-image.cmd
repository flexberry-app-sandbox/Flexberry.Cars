docker build --no-cache -f SQL\Dockerfile.PostgreSql -t cars/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t cars/app ../..
