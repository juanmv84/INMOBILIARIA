var APP_DATA = {
  "scenes": [
    {
      "id": "0-ingreso",
      "name": "ingreso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.9020229691060457,
        "pitch": 0.11654492325956767,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -3.133822357259895,
          "pitch": 0.1588539566223286,
          "rotation": 0,
          "target": "1-comedor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.131356207439932,
          "pitch": -0.1312114761524068,
          "title": "DEPARTAMENTO EN ALQUILER",
          "text": "2 HABITACIONES<div>2 BAÑOS</div><div>COCINA COMEDOR AMPLIO</div>"
        }
      ]
    },
    {
      "id": "1-comedor",
      "name": "comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.465251698429727,
        "pitch": 0.30651566837519617,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -3.129536256831912,
          "pitch": 0.12077557827293894,
          "rotation": 0,
          "target": "2-ventana"
        },
        {
          "yaw": 0.15319783420583377,
          "pitch": 0.055028605043332846,
          "rotation": 0,
          "target": "0-ingreso"
        },
        {
          "yaw": -1.073228775240299,
          "pitch": 0.10060181082195285,
          "rotation": 0,
          "target": "3-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ventana",
      "name": "ventana",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 3.121423111539471,
        "pitch": 0.2575266852671092,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.08982899958736645,
          "pitch": 0.12826874195251037,
          "rotation": 0,
          "target": "1-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-pasillo",
      "name": "pasillo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.258903294458521,
        "pitch": 0.29866385965307884,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 3.033321381790598,
          "pitch": 0.14322220753455994,
          "rotation": 3.141592653589793,
          "target": "5-bao"
        },
        {
          "yaw": 1.5790640216509049,
          "pitch": 0.10533351129110002,
          "rotation": 3.141592653589793,
          "target": "4-dormitorio"
        },
        {
          "yaw": 0.6084363209841257,
          "pitch": 0.05808168340857023,
          "rotation": 3.141592653589793,
          "target": "1-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dormitorio",
      "name": "dormitorio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.949293401885159,
        "pitch": 0.2545585662605916,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.30689850738903957,
          "pitch": 0.08857654135386994,
          "rotation": 0,
          "target": "3-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bao",
      "name": "baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.65318655254611,
        "pitch": 0.7318322339298149,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.3043515076303613,
          "pitch": 0.07611857291683499,
          "rotation": 0,
          "target": "3-pasillo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.013170445093209082,
          "pitch": -0.13135219912643237,
          "title": "CUANTA CON CALDERA Y TERMOSTATO",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "tour departamento",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
