import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:route_task/core/di/get_it.dart';
import 'package:route_task/core/utils/my_bloc_observer.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:route_task/products_feature/presentation/screens/products_screen.dart';

void main() {
  runApp(const MyApp());
  Bloc.observer = MyBlocObserver();
  configeDependencies();
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: ScreenUtilInit(
        designSize: Size(430, 932),
        minTextAdapt: true,
        splitScreenMode: true,
        child: ProductsScreen(),
      ),
    );
  }
}
