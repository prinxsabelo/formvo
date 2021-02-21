const PayloadApi = {
    "form": {
        "title": "Black cofee game",
        "form_id": "1",
        "questions": [
            {
                "q_id": "J5sE2DuDfZ5d",
                "title": "Someday or when?",
                "type": "TEXT",

                "properties": {
                    "shape": "star",
                    "allow_multiple_selection": false,
                    "randomize": false,
                    "choices": [],
                    "responses": []
                }
            },
            {
                "q_id": "Jgtgt5sEzDuDfc3",
                "title": "Tell me your thoughts",
                "type": "TEXT",

                "properties": {
                    "shape": "star",
                    "allow_multiple_selection": false,
                    "randomize": false,
                    "choices": [],
                    "responses": []
                }
            },
            {
                "q_id": "Jgth5s454fZ5d",
                "title": "xxx in the making?",
                "type": "TEXT",

                "properties": {
                    "shape": "star",
                    "allow_multiple_selection": false,
                    "randomize": false,
                    "choices": [],
                    "responses": []
                }
            },
            {
                "q_id": "J5frsEzD3334uDfc3",
                "title": "Cleaning out my closet?",
                "type": "TEXT",

                "properties": {
                    "shape": "star",
                    "allow_multiple_selection": false,
                    "randomize": false,
                    "choices": [],
                    "responses": []
                }
            },
            {
                "q_id": "efgJ5sEzdDuD565d3",
                "title": "Choose your thoughts?",
                "type": "CHOICE",

                "properties": {
                    "shape": "star",
                    "randomize": true,
                    "allow_multiple_selection": true,
                    "choices": [
                        {
                            "id": "1",
                            "label": "Good"
                        },
                        {
                            "id": "2",
                            "label": "Bad"
                        },
                        {
                            "id": "3",
                            "label": "Fucked"
                        }
                    ],
                    "responses": []
                }
            },
            {
                "q_id": "dJ5sEerzE3DfZ5d",
                "title": "Good for us?",
                "type": "YN",

                "properties": {
                    "shape": "star",
                    "allow_multiple_selection": false,
                    "randomize": false,
                    "choices": [],
                    "responses": [
                        {
                            "response_id": "xxx",
                            "occupy": "YES",
                            "label": "Hell Yes"
                        },
                        {
                            "response_id": "xxx",
                            "occupy": "NO",
                            "label": "Hell No"
                        }
                    ]
                }
            },

        ]
    }

}
export default PayloadApi;


// Model for response_tb
// {
//     response_id:integer,
//     queston_id:integer,
//     type:"",
//     occupy:"",

// }