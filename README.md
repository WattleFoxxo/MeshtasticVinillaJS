# MeshtasticVinillaJS
Build meshtastic.js for the browser

## How to build
first install dependencies `npm install`
then run `npm run build`

## How to use
```html
<!doctype html>
<html>
    <head>
        <script src="meshtastic.umd.cjs"></script>
    </head>
    <body>
        <script>
            const meshtastic = globalThis.Meshtastic.meshtastic;
            
            const client = new meshtastic.Client();
            const connection = client.createHttpConnection(0);

            connection.connect({
                address: "192.168.x.x",
                fetchInterval: 3000
            });
        </script>
    </body>
</html>
```

### Notice:
This project is NOT affiliated with, endorsed by, or related to Meshtastic in any way.

Meshtastic® is a registered trademark of Meshtastic LLC. Meshtastic software components are released under various licenses, see GitHub for details. No warranty is provided - use at your own risk.