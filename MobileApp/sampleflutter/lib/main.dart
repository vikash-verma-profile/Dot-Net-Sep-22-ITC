import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  answerQuestion() => {print('Answer Chosen !')};

  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    var question = [
      'what is your favorite color?',
      'what is your favorite animal?'
    ];
    return MaterialApp(
        home: Scaffold(
      appBar: AppBar(
        title: const Text('Hello!'),
      ),
      body: Column(
        children: [
          Text(question[0]),
          ElevatedButton(
            child: const Text('Answer 1'),
            onPressed: answerQuestion,
          ),
          ElevatedButton(
            child: const Text('Answer 2'),
            onPressed: () => print("Answer 2 choosen"),
          ),
          ElevatedButton(
            child: const Text('Answer 3'),
            onPressed: () => print("Answer 3 choosen"),
          ),
        ],
      ),
    ));
  }
}
