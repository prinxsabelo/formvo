const PayloadApi = {
    "form": {
        "title": "Black cofee game",
        "form_id": "1",
        "questions": [
            {
                "q_id": "J5sEzDuDfZ5d",
                "title": "Someday or when?",
                "type": "TEXT",
                "response": "dkd",
                "properties": {
                    "shape": "star",
                    "allow_multiple_selection": false,
                    "randomize": false,
                    "choices": []
                }
            },
            {
                "q_id": "J5sEzDuDfc3",
                "title": "Tell me your thoughts",
                "type": "TEXT",
                "response": "Well i love you.",
                "properties": {
                    "shape": "star",
                    "allow_multiple_selection": false,
                    "randomize": false,
                    "choices": []
                }
            },
            {
                "q_id": "J5sEzDuDd3",
                "title": "Choose your thoughts?",
                "type": "CHOICE",
                "response": "You burnt my candle.",
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
                    ]
                }
            }
        ]
    }

}
export default PayloadApi;