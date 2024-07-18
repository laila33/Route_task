// ignore_for_file: avoid_print
import 'package:flutter_bloc/flutter_bloc.dart';

class MyBlocObserver extends BlocObserver {
  @override
  void onCreate(BlocBase bloc) {
    super.onCreate(bloc);
    print('✅ onCreate -- 🔸${bloc.runtimeType}🔸');
  }

  @override
  void onChange(BlocBase bloc, Change change) {
    super.onChange(bloc, change);
    print('🔄 onChange -- 🔸${bloc.runtimeType}🔸, ⏭ $change');
  }

  @override
  void onError(BlocBase bloc, Object error, StackTrace stackTrace) {
    print('❌ onError -- 🔺${bloc.runtimeType}🔺, $error');
    super.onError(bloc, error, stackTrace);
  }

  @override
  void onClose(BlocBase bloc) {
    super.onClose(bloc);
    print(' 🔒 onClose -- 🏴‍☠️${bloc.runtimeType}🏴‍☠️');
  }
}
