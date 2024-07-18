// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// InjectableConfigGenerator
// **************************************************************************

// ignore_for_file: type=lint
// coverage:ignore-file

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:get_it/get_it.dart' as _i1;
import 'package:injectable/injectable.dart' as _i2;
import 'package:route_task/core/api/api_manager.dart' as _i3;
import 'package:route_task/products_feature/data/repository/data_sources/products_remote_data_source_impl.dart'
    as _i5;
import 'package:route_task/products_feature/data/repository/repository/products_repository_impl.dart'
    as _i7;
import 'package:route_task/products_feature/domain/repository/data_sources/products_remote_data_source_contract.dart'
    as _i4;
import 'package:route_task/products_feature/domain/repository/repository/products_repository_contract.dart'
    as _i6;
import 'package:route_task/products_feature/domain/use_cases/get_products_use_case.dart'
    as _i8;
import 'package:route_task/products_feature/presentation/cubit/products_cubit.dart'
    as _i9;

extension GetItInjectableX on _i1.GetIt {
// initializes the registration of main-scope dependencies inside of GetIt
  _i1.GetIt init({
    String? environment,
    _i2.EnvironmentFilter? environmentFilter,
  }) {
    final gh = _i2.GetItHelper(
      this,
      environment,
      environmentFilter,
    );
    gh.singleton<_i3.ApiManager>(() => _i3.ApiManager());
    gh.lazySingleton<_i4.ProductsRemoteDataSourceContract>(
        () => _i5.ProductsRemoteDataSourceImpl(gh<_i3.ApiManager>()));
    gh.lazySingleton<_i6.ProductsRepositoryContract>(() =>
        _i7.ProductsRepositoryImpl(gh<_i4.ProductsRemoteDataSourceContract>()));
    gh.factory<_i8.GetProductsUseCase>(
        () => _i8.GetProductsUseCase(gh<_i6.ProductsRepositoryContract>()));
    gh.lazySingleton<_i9.ProductsCubit>(
        () => _i9.ProductsCubit(gh<_i8.GetProductsUseCase>()));
    return this;
  }
}
