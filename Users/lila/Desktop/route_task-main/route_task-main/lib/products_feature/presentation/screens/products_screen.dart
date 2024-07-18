import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:route_task/core/di/get_it.dart';
import 'package:route_task/core/themes/my_colors.dart';
import 'package:route_task/core/widgets/search_app_bar.dart';
import 'package:route_task/products_feature/presentation/cubit/products_cubit.dart';
import 'package:route_task/products_feature/presentation/cubit/products_states.dart';
import 'package:route_task/products_feature/presentation/widgets/product_item.dart';

class ProductsScreen extends StatelessWidget {
  const ProductsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        titleSpacing: 5,
        title: const HomeAppBar(),
        toolbarHeight: 130.h,
      ),
      body: BlocProvider(
        create: (context) => getIt.get<ProductsCubit>()..getProducts(),
        child: Padding(
          padding: EdgeInsets.symmetric(horizontal: 16.w, vertical: 15.h),
          child: BlocBuilder<ProductsCubit, ProductsStates>(
            builder: (context, state) {
              if (state is ProductsSuccessState) {
                return GridView.builder(
                  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 2,
                    mainAxisSpacing: 10.h,
                    crossAxisSpacing: 10.w,
                    childAspectRatio: 1 / 1.3,
                  ),
                  itemCount: state.products?.length,
                  itemBuilder: (context, i) {
                    return ProductItem(product: state.products![i]);
                  },
                );
              } else {
                return const Center(
                  child: CircularProgressIndicator(
                    color: MyColors.blueColor,
                  ),
                );
              }
            },
          ),
        ),
      ),
    );
  }
}
