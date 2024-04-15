## Query #1
curl -X GET \
'127.0.0.1:3000/api/features?page=1&per_page=2' \
-H 'Content-Type: application/vnd.api+json' \
-H 'cache-control: no-cache'

## Query #2
curl -XGET -H "Content-type: application/json" \
'http://127.0.0.1:3000/api/features?page=1&per_page=2&mag_type[]=md'

## Query #3

curl --request POST \
--url 'http://127.0.0.1:3000/api/features/1/comments' \
--header 'content-type: application/json' \
--data '{"body": "This is a comment" }'