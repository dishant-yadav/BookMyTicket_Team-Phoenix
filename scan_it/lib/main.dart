import 'package:flutter/material.dart';
import 'package:scan_it/login.dart';
import 'login.dart';
void main() {
  runApp(const scan_it());
}

class scan_it extends StatelessWidget {
  const scan_it({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp( title: 'flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primarySwatch: Colors.blue),
      home: login(),
     
    );
  }
}