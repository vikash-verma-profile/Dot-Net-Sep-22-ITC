import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
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
          const Text('The question'),
          const ElevatedButton(child: const Text('Answer 1'), onPressed: null),
          const ElevatedButton(child: const Text('Answer 2'), onPressed: null),
          const ElevatedButton(child: const Text('Answer 3'), onPressed: null),
        ],
      ),
    ));
  }
}
