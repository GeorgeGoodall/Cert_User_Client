echo "Building cert application and copying into server"
yarn build
cd build
mkdir -p "../../../../api/pages/UI_build"
cp -r * "../../../../api/pages/UI_build"