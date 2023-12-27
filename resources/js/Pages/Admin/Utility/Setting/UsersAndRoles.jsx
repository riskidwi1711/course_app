import PageTitle from "@/App/Components/PageTitle";
import { toggleToast } from "@/App/Utils/Reducers/PageSlice";
import usePageState from "@/App/Utils/hooks/usePageState";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router, useRemember } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function UsersAndRoles({
    auth,
    users,
    roles,
    rolepermissions,
    permissions,
    pageIdentity,
}) {
    const [currentTab, setCurrentTab] = useRemember(0);

    const tabs = ["Roles", "Permissions"];
    const ContentComp = [Users, Roles];
    const CompContent = ContentComp[currentTab];

    const props = {
        users: users,
        roles: roles,
        permissions: permissions,
        rolepermissions: rolepermissions,
    };
    return (
        <Authenticated auth={auth} pageIdentity={pageIdentity}>
            <div class="setting_tabs">
                <ul class="nav nav-pills mb-4" id="pills-tab" role="tablist">
                    {Object.values(tabs).map((tab, index) => {
                        return (
                            <li class="nav-item">
                                <a
                                    class={`nav-link ${
                                        currentTab === index && "active"
                                    }`}
                                    id="pills-account-tab"
                                    data-toggle="pill"
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCurrentTab(index);
                                    }}
                                    role="tab"
                                    aria-selected="true"
                                >
                                    {tab}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div class="tab-content" id="pills-tabContent">
                <CompContent {...props} />
            </div>
        </Authenticated>
    );
}

function Users({ users, roles }) {
    const dispatch = useDispatch();
    const handleChangeRole = (e, uid) => {
        let role_id = e.target.value;
        let data = {
            role_id: role_id,
            user_id: uid,
        };
        router.post("roles&permissions/change-role", data, {
            onSuccess: (e) =>
                dispatch(
                    toggleToast({
                        show: true,
                        text: "Success change the user role",
                    })
                ),
        });
    };
    return (
        <div
            class="tab-pane fade show active"
            id="pills-account"
            role="tabpanel"
            aria-labelledby="pills-account-tab"
        >
            <div class="table-responsive account_setting card">
                <table class="table table-striped border mb-0">
                    <thead>
                        <tr>
                            <th scope="col">Nama</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(users.data).map((user) => {
                            return (
                                <tr>
                                    <td
                                        style={{
                                            verticalAlign: "middle",
                                        }}
                                    >
                                        <div class="d-flex">
                                            <a
                                                href="instructor_profile_view.html"
                                                class="menu--link user_img"
                                            >
                                                <img
                                                    src="/assets/dashboard/images/left-imgs/img-2.jpg"
                                                    alt=""
                                                    class="ml-0"
                                                />
                                                {user.name}
                                            </a>
                                        </div>
                                    </td>
                                    <td
                                        style={{
                                            verticalAlign: "middle",
                                        }}
                                    >
                                        {user.email}
                                    </td>
                                    <td
                                        style={{
                                            verticalAlign: "middle",
                                        }}
                                    >
                                        <select
                                            class="form-select text-capitalize fs-5"
                                            onChange={(e) =>
                                                handleChangeRole(e, user.id)
                                            }
                                        >
                                            {Object.values(roles).map(
                                                (role, index) => {
                                                    const selected =
                                                        role.id ===
                                                        user.roles[0].id;
                                                    if (selected) {
                                                        return (
                                                            <option
                                                                selected
                                                                value={role.id}
                                                                className="text-capitalize "
                                                            >
                                                                {role.name}
                                                            </option>
                                                        );
                                                    } else {
                                                        return (
                                                            <option
                                                                value={role.id}
                                                                className="text-capitalize"
                                                            >
                                                                {role.name}
                                                            </option>
                                                        );
                                                    }
                                                }
                                            )}
                                        </select>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div class="d-flex justify-content-between align-items-center px-4 py-2 w-100 border border-top-0">
                    <div>
                        Showing {users.from} to {users.to} of {users.total}
                    </div>
                    <div>
                        <nav aria-label="...">
                            <ul class="pagination">
                                {Object.values(users.links).map((link) => {
                                    return (
                                        <li
                                            class={`page-item ${
                                                !link.active ? "disabled" : ""
                                            } `}
                                        >
                                            <Link
                                                class="page-link"
                                                method="get"
                                                href={link.url}
                                            >
                                                {link.label
                                                    .replace("&laquo;", "")
                                                    .replace("&raquo;", "")}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Roles({ roles, permissions, rolepermissions }) {
    console.log(rolepermissions);
    const [checkboxes, setCheckboxes] = useState({});
    const groupedData = permissions.reduce((result, item) => {
        const [groupName] = item.name.split("-"); // Split the name and take the first part

        if (!result[groupName]) {
            result[groupName] = [];
        }

        result[groupName].push(item);
        return result;
    }, {});

    useEffect(() => {
        const permissionRoleMap = {};

        rolepermissions.forEach((role) => {
            const roleName = role.name;
            role.permissions.forEach((permission) => {
                const permissionName = permission.name;
                const key = `${permissionName}:${roleName}`;
                permissionRoleMap[key] = true;
            });
        });
        setCheckboxes(permissionRoleMap);
    }, [rolepermissions]);

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes({
            ...checkboxes,
            [name]: checked,
        });
    };

    const handleSave = () => {
        const transformedObject = {};
        let existingObject = checkboxes;

        for (const key in existingObject) {
            const [permission, role] = key.split(":");

            if (!transformedObject[role]) {
                transformedObject[role] = [];
            }

            if (existingObject[key] === true) {
                transformedObject[role].push(permission);
            }
        }

        router.post("roles&permissions/change-permission", transformedObject, {
            onSuccess: (e) =>
                dispatch(
                    toggleToast({
                        show: true,
                        text: "Success change the user role",
                    })
                ),
        });
    };

    return (
        <div
            class="tab-pane fade show active"
            id="pills-account"
            role="tabpanel"
            aria-labelledby="pills-account-tab"
        >
            <div class="table-responsive account_setting card">
                <table class="table mb-0">
                    <thead class="">
                        <tr class="font-weight-normal ">
                            <th
                                class="border"
                                style={{
                                    verticalAlign: "middle",
                                    textAlign: "left",
                                }}
                                scope="col"
                                rowSpan={2}
                            >
                                Permissions
                            </th>
                            <th
                                class=""
                                scope="col"
                                colSpan={3}
                                style={{
                                    width: 15 + "%",
                                    verticalAlign: "middle",
                                    textAlign: "center",
                                }}
                            >
                                Roles
                            </th>
                        </tr>
                        <tr class="font-weight-normal">
                            {Object.values(roles).map((role) => {
                                return (
                                    <th
                                        class="border text-capitalize"
                                        scope="col"
                                        style={{
                                            width: 15 + "%",
                                            textAlign: "center",
                                        }}
                                    >
                                        {role.name}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(groupedData).map((group) => {
                            return (
                                <>
                                    <tr>
                                        <td
                                            class="bg-light fw-bold py-3 font-color-primary  text-capitalize"
                                            colspan="4"
                                        >
                                            {group}
                                        </td>
                                    </tr>
                                    {Object.values(groupedData[group]).map(
                                        (data) => {
                                            return (
                                                <tr>
                                                    <td class="py-3 ">
                                                        {data.name.replace(
                                                            "-",
                                                            " "
                                                        )}
                                                    </td>
                                                    {Object.values(roles).map(
                                                        (role, index) => {
                                                            return (
                                                                <td class="">
                                                                    <div
                                                                        style={{
                                                                            display:
                                                                                "flex",
                                                                            alignItems:
                                                                                "center",
                                                                            justifyContent:
                                                                                "center",
                                                                        }}
                                                                        class="form-check form-switch form-switch-md"
                                                                        dir="ltr"
                                                                    >
                                                                        <input
                                                                            onChange={
                                                                                handleCheckboxChange
                                                                            }
                                                                            class="form-check-input"
                                                                            type="checkbox"
                                                                            checked={
                                                                                checkboxes[
                                                                                    data.name +
                                                                                        ":" +
                                                                                        role.name
                                                                                ]
                                                                            }
                                                                            name={
                                                                                data.name +
                                                                                ":" +
                                                                                role.name
                                                                            }
                                                                            key={
                                                                                data.name +
                                                                                index
                                                                            }
                                                                        />
                                                                    </div>
                                                                </td>
                                                            );
                                                        }
                                                    )}
                                                </tr>
                                            );
                                        }
                                    )}
                                </>
                            );
                        })}
                    </tbody>
                </table>
                <div className="py-3 px-4 d-flex justify-content-end">
                    <button
                        onClick={() => handleSave()}
                        className="btn btn-primary waves-effect waves-light "
                    >
                        Simpan perubahan role
                    </button>
                </div>
            </div>
        </div>
    );
}
