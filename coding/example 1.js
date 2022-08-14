// Q: Get min and assigned doors using asset and shipment


const asset = [
    {
        "_id": "6242ba44dcf53912605bf342",
        "epcID": "AE3000000000000000010032",
        "__v": 0,
        "createdAt": "2022-03-29T07:50:27.017Z",
        "salesOrder": "QADEER01",
        "updatedAt": "2022-03-29T07:50:27.017Z"
    },
    {
        "_id": "6242d41ddcf5391260a4632c",
        "epcID": "AE3000000000000000010033",
        "__v": 0,
        "createdAt": "2022-03-29T09:40:44.969Z",
        "salesOrder": "QADEER01",
        "updatedAt": "2022-03-29T14:51:46.936Z",
        "tollerID": "teller210101"
    },
    {
        "_id": "6242d42bdcf5391260a48887",
        "epcID": "AE3000000000000000010034",
        "__v": 0,
        "createdAt": "2022-03-29T09:40:58.478Z",
        "salesOrder": "QADEER01",
        "updatedAt": "2022-03-31T14:59:36.361Z",
        "tollerID": "teller210101"
    },
    {
        "_id": "6242d432dcf5391260a49dfc",
        "epcID": "AE3000000000000000010035",
        "__v": 0,
        "createdAt": "2022-03-29T09:41:05.834Z",
        "salesOrder": "QADEER01",
        "updatedAt": "2022-03-29T09:41:05.834Z"
    },
    {
        "_id": "6242d43ddcf5391260a4bc41",
        "epcID": "AE3000000000000000010036",
        "__v": 0,
        "createdAt": "2022-03-29T09:41:16.215Z",
        "salesOrder": "QADEER01",
        "updatedAt": "2022-03-29T09:41:16.215Z"
    },
    {
        "_id": "624692017acdb8a6815fd184",
        "epcID": "AE3000000000000000010091",
        "__v": 0,
        "createdAt": "2022-04-01T05:47:44.616Z",
        "salesOrder": "QADEER02",
        "tollerID": "teller210101",
        "updatedAt": "2022-04-01T05:47:44.616Z"
    },
    {
        "_id": "624692317acdb8a681605d51",
        "epcID": "AE3000000000000000010092",
        "__v": 0,
        "createdAt": "2022-04-01T05:48:32.678Z",
        "salesOrder": "QADEER02",
        "tollerID": "teller210101",
        "updatedAt": "2022-04-01T05:48:32.678Z"
    },
    {
        "_id": "624692377acdb8a681606b6f",
        "epcID": "AE3000000000000000010093",
        "__v": 0,
        "createdAt": "2022-04-01T05:48:38.221Z",
        "salesOrder": "QADEER02",
        "tollerID": "teller210101",
        "updatedAt": "2022-04-01T05:48:38.221Z"
    },
    {
        "_id": "624692627acdb8a68160e905",
        "epcID": "AE3000000000000000010094",
        "__v": 0,
        "createdAt": "2022-04-01T05:49:22.095Z",
        "salesOrder": "QADEER03",
        "tollerID": "teller210101",
        "updatedAt": "2022-04-01T05:49:22.095Z"
    },
    {
        "_id": "6246926c7acdb8a681610baa",
        "epcID": "AE3000000000000000010095",
        "__v": 0,
        "createdAt": "2022-04-01T05:49:31.908Z",
        "salesOrder": "QADEER03",
        "tollerID": "teller210101",
        "updatedAt": "2022-04-01T05:49:31.908Z"
    },
    {
        "_id": "624692717acdb8a68161217a",
        "epcID": "AE3000000000000000010096",
        "__v": 0,
        "createdAt": "2022-04-01T05:49:36.679Z",
        "salesOrder": "QADEER03",
        "tollerID": "teller210101",
        "updatedAt": "2022-04-01T05:49:36.679Z"
    }
]

const totalShipment = [
    {
        "open_items": {
            "qt": "5",
            "remarks": "open",
            "date": "2022-03-29T09:41:16.646Z",
            "epcIDs": [
                "AE3000000000000000010036",
                "AE3000000000000000010035",
                "AE3000000000000000010034",
                "AE3000000000000000010033",
                "AE3000000000000000010032"
            ]
        },
        "picked_items": {
            "qt": "1",
            "remarks": "picked",
            "date": "2022-03-29T09:58:04.502Z",
            "epcIDs": [
                "AE3000000000000000010032"
            ]
        },
        "shipped_items": {
            "qt": "1",
            "remarks": "shipped",
            "date": "2022-03-29T11:17:19.795Z",
            "epcIDs": [
                "AE3000000000000000010032"
            ]
        },
        "loaded_items": {
            "qt": "3",
            "remarks": "loaded",
            "date": "2022-03-31T12:37:54.119Z",
            "epcIDs": [
                "AE3000000000000000010034",
                "AE3000000000000000010033",
                "AE3000000000000000010032"
            ]
        },
        "_id": "6242b9e2ebc7e73183cd6c48",
        "salesOrder": "QADEER01",
        "serialNumber": "QADEER01",
        "assignedDoor": "Assigned_door2",
        "customer": "innovent-786",
        "facilityCode": "Campus",
        "mode": "sales order",
        "productShip": "productShip",
        "reset": "false",
        "singleConfirmation": "false",
        "soDate": "2022-04-01",
        "soDestination": "NO_ASSIGNED",
        "soLocation": "NO_ASSIGNED",
        "source": "Integration",
        "status": "shipped",
        "type": "warehouse",
        "userScanning": "Qadeer",
        "createdAt": "2022-03-29T07:48:50.665Z",
        "updatedAt": "2022-04-01T06:06:04.966Z",
        "__v": 0
    },
    {
        "open_items": {
            "qt": "3",
            "remarks": "open",
            "date": "2022-04-01T05:48:38.558Z",
            "epcIDs": [
                "AE3000000000000000010093",
                "AE3000000000000000010092",
                "AE3000000000000000010091"
            ]
        },
        "picked_items": {
            "epcIDs": [

            ]
        },
        "shipped_items": {
            "epcIDs": [

            ]
        },
        "loaded_items": {
            "epcIDs": [

            ]
        },
        "_id": "62469119531115d73640d3a5",
        "salesOrder": "QADEER02",
        "serialNumber": "QADEER02",
        "assignedDoor": "B21_East_Dock_Door_2",
        "customer": "Innovent",
        "facilityCode": "Campus",
        "mode": "Sales Order",
        "productShip": "productShip",
        "reset": "false",
        "singleConfirmation": "true",
        "soDate": "2022-02-23T04:00:00.000Z",
        "soDestination": "NO_ASSIGNED",
        "soLocation": "NO_ASSIGNED",
        "source": "Integration",
        "status": "shipped",
        "type": "Shipment",
        "userScanning": "ali",
        "createdAt": "2022-04-01T05:43:53.185Z",
        "updatedAt": "2022-04-01T06:06:41.889Z",
        "__v": 0
    },
    {
        "open_items": {
            "qt": "3",
            "remarks": "open",
            "date": "2022-04-01T05:49:36.945Z",
            "epcIDs": [
                "AE3000000000000000010096",
                "AE3000000000000000010095",
                "AE3000000000000000010094"
            ]
        },
        "picked_items": {
            "epcIDs": [

            ]
        },
        "shipped_items": {
            "epcIDs": [

            ]
        },
        "loaded_items": {
            "epcIDs": [

            ]
        },
        "_id": "62469141531115d73640d3aa",
        "salesOrder": "QADEER03",
        "serialNumber": "QADEER03",
        "assignedDoor": "B21_East_Dock_Door_2",
        "customer": "Innovent",
        "facilityCode": "Campus",
        "mode": "Sales Order",
        "productShip": "productShip",
        "reset": "false",
        "singleConfirmation": "true",
        "soDate": "2022-02-23T04:00:00.000Z",
        "soDestination": "NO_ASSIGNED",
        "soLocation": "NO_ASSIGNED",
        "source": "Integration",
        "status": "shipped",
        "type": "Shipment",
        "userScanning": "ali",
        "createdAt": "2022-04-01T05:44:33.821Z",
        "updatedAt": "2022-04-01T06:07:02.154Z",
        "__v": 0
    }
]


