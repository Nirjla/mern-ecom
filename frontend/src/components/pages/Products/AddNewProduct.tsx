import { Breadcrumb } from "../../common/Breadcrumb"
import { InputField } from "../../common/InputField"

export const AddNewProduct = () => {
      return (<>
            <Breadcrumb pageName="Add New Product" />
            <div className="grid grid-cols-1 gap-9">
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full xl:w-1/2">
                              <InputField label="Product Name" placeholder="Enter Product name..." id="name" />
                        </div>
                        <div className="w-full xl:w-1/2">
                              <InputField label="Product Price" placeholder="Enter Product price..." id="price" type="number" />

                        </div>
                  </div>

            </div>
      </>)
}