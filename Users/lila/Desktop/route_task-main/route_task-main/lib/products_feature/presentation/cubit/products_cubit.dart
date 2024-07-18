import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:injectable/injectable.dart';
import 'package:route_task/products_feature/domain/entities/products_response.dart';
import 'package:route_task/products_feature/domain/use_cases/get_products_use_case.dart';
import 'package:route_task/products_feature/presentation/cubit/products_states.dart';

@lazySingleton
class ProductsCubit extends Cubit<ProductsStates> {
  final GetProductsUseCase _getProductsUseCase;

  ProductsCubit(this._getProductsUseCase) : super(ProductsInitialState());

  List<Product>? products = [];

  Future<void> getProducts() async {
    emit(ProductsLoadingState());
    var either = await _getProductsUseCase();
    either.fold(
      (error) => emit(ProductErrorState(error.errorMessage)),
      (response) {
        products = response.products;
        emit(
          ProductsSuccessState(
            products: products,
          ),
        );
      },
    );
  }
}
