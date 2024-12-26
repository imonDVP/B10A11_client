

// eslint-disable-next-line react/prop-types
const BookedServiesTable = ({bookedService}) => {
    console.log(bookedService)
    const {serviceCategory,servicePrice,serviceProvider,customer
    }=bookedService || {}

    return (
                <tr>
                    <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12 rounded-full">
                            <img
                            src={serviceProvider?.image}
                            alt="image" />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">{serviceProvider?.name}</div>
                        <div className="text-sm opacity-50">{serviceProvider?.email}</div>
                        </div>
                    </div>
                    </td>
                    <td>
                        {customer?.email}
                    </td>
                    <td>{serviceCategory}</td>
                    <th>
                        {servicePrice}
                    </th>
                </tr>

    );
};

export default BookedServiesTable;