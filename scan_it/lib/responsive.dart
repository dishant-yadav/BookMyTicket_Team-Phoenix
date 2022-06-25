import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import './scanpages/scan.dart';

class responsive extends StatelessWidget {
  responsive({
    super.key,
  });
  List test = ['User', 'Admin'];

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          SizedBox(
            height: 60,
            width: 200,
            child: ElevatedButton(
              onPressed: (() => Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: ((context) => scan()),
                    ),
                  )),
              style: ElevatedButton.styleFrom(
                  primary: Colors.white,
                  onPrimary: Colors.black12,
                  elevation: 5,
                  padding: EdgeInsets.all(20)),
              child: Text(
                'Login As User',
                style: TextStyle(
                    color: Color(0xcc468499),
                    fontSize: 14,
                    fontWeight: FontWeight.bold),
              ),
            ),
          )
        ],
      ),
    );
  }
}
